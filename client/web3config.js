import Web3 from 'web3';
const koladeUserFactoryAddress = '0x98832cCa1CDa43Fed5E7179445aB1D3FcF72AcC4'
const koladeUserFactoryABI = 
[
    {
      inputs: [ [Object] ],
      stateMutability: 'nonpayable',
      type: 'constructor',
      constant: undefined,
      payable: undefined,
      signature: 'constructor'
    },
    {
      inputs: [ [Object] ],
      name: 'OwnableInvalidOwner',
      type: 'error',
      constant: undefined,
      payable: undefined
    },
    {
      inputs: [ [Object] ],
      name: 'OwnableUnauthorizedAccount',
      type: 'error',
      constant: undefined,
      payable: undefined
    },
    {
      anonymous: false,
      inputs: [ [Object], [Object] ],
      name: 'OwnershipTransferred',
      type: 'event',
      constant: undefined,
      payable: undefined,
      signature: '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    },
    {
      anonymous: false,
      inputs: [ [Object] ],
      name: 'UserCreated',
      type: 'event',
      constant: undefined,
      payable: undefined,
      signature: '0x0b0376a109cbb578b709f85f6a7befcdac3ac1ab251c99ede87f30c9572ac4d3'
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      payable: undefined,
      signature: '0x8da5cb5b'
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      constant: undefined,
      payable: undefined,
      signature: '0x715018a6'
    },
    {
      inputs: [],
      name: 'tokenContract',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      payable: undefined,
      signature: '0x55a373d6'
    },
    {
      inputs: [ [Object] ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
      constant: undefined,
      payable: undefined,
      signature: '0xf2fde38b'
    },
    {
      inputs: [ [Object] ],
      name: 'users',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function',
      constant: true,
      payable: undefined,
      signature: '0x365b98b2'
    },
    {
      inputs: [ [Object], [Object] ],
      name: 'createUser',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
      constant: undefined,
      payable: true,
      signature: '0x121ef243'
    }
]
  

const web3 = new Web3(window.ethereum);

