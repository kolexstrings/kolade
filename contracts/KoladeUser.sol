// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract KoladeUser is Ownable {
    string public name;
    address public koladeToken;
    IERC20 public tokenContract;
    uint256 public tokenAmount;
    uint256 public tokenBalance;

    struct Post {
        address author;
        string content;
        string imageURL;
        uint256 likes;
    }

    Post[] public posts;
    mapping(address => bool) public likedPosts;

    event PostCreated(address indexed author, uint256 postId);
    event PostLiked(address indexed user, uint256 postId);

    constructor(string memory _name, address _tokenContractAddress) {
        name = _name;
        koladeToken = msg.sender;
        tokenContract = IERC20(_tokenContractAddress);
    }

    function setTokenAmount(uint256 _amount) public onlyOwner {
        require(tokenAmount == 0, "Token amount can only be set once");
        tokenAmount = _amount;
    }

    function createPost(string memory _content, string memory _imageURL) public {
        require(bytes(_content).length > 0, "Content should not be empty");

        Post memory newPost = Post({
            author: msg.sender,
            content: _content,
            imageURL: _imageURL,
            likes: 0
        });

        posts.push(newPost);
        emit PostCreated(msg.sender, posts.length - 1);
    }

    function likePost(uint256 _postId) public {
        require(_postId < posts.length, "Invalid post ID");
        require(!likedPosts[msg.sender], "You've already liked this post");

        Post storage post = posts[_postId];
        require(msg.sender != post.author, "You cannot like your own post");

        uint256 tokensToPay = 1;

        require(tokenContract.allowance(msg.sender, address(this)) >= tokensToPay, "Insufficient allowance");

        tokenContract.transferFrom(msg.sender, address(this), tokensToPay);

        tokenContract.transfer(post.author, tokensToPay);

        post.likes++;
        likedPosts[msg.sender] = true;

        emit PostLiked(msg.sender, _postId);
    }

    function distributeTokensToLikers(uint256 _postId) public onlyOwner {
        require(_postId < posts.length, "Invalid post ID");
        Post storage post = posts[_postId];

        require(msg.sender == post.author, "You can only distribute tokens for your posts");

        uint256 totalLikings = 0;
        for (uint256 i = 0; i < posts.length; i++) {
            if (likedPosts[post.author]) {
                totalLikings++;
            }
        }

        uint256 tokensToDistribute = tokenBalance / 2 / totalLikings;

        for (uint256 i = 0; i < posts.length; i++) {
            if (likedPosts[post.author]) {
                tokenContract.transfer(post.author, tokensToDistribute);
            }
        }
    }

    function depositTokens(uint256 amount) public {
        require(amount > 0, "Amount must be greater than 0");
        require(tokenContract.allowance(msg.sender, address(this)) >= amount, "Insufficient allowance");

        tokenContract.transferFrom(msg.sender, address(this), amount);
        tokenBalance += amount;
    }

    function withdrawTokens(uint256 amount) public {
        require(amount > 0, "Amount must be greater than 0");
        require(tokenBalance >= amount, "Insufficient balance");

        tokenContract.transfer(msg.sender, amount);
        tokenBalance -= amount;
    }

    function getBalance() public view returns (uint256) {
        return tokenBalance;
    }
}
