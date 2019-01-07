import * as Web3 from 'web3';
export declare const web3Factory: {
    create(hasAddresses?: boolean): Web3;
    getRpcProvider(hasAddresses?: boolean): Web3.Provider;
};
