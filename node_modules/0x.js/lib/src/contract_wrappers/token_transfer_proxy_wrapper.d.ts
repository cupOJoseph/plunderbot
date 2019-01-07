import { Web3Wrapper } from '@0xproject/web3-wrapper';
import { ContractWrapper } from './contract_wrapper';
/**
 * This class includes the functionality related to interacting with the TokenTransferProxy contract.
 */
export declare class TokenTransferProxyWrapper extends ContractWrapper {
    private _tokenTransferProxyContractIfExists?;
    private _contractAddressIfExists?;
    constructor(web3Wrapper: Web3Wrapper, networkId: number, contractAddressIfExists?: string);
    /**
     * Check if the Exchange contract address is authorized by the TokenTransferProxy contract.
     * @param   exchangeContractAddress     The hex encoded address of the Exchange contract to call.
     * @return  Whether the exchangeContractAddress is authorized.
     */
    isAuthorizedAsync(exchangeContractAddress: string): Promise<boolean>;
    /**
     * Get the list of all Exchange contract addresses authorized by the TokenTransferProxy contract.
     * @return  The list of authorized addresses.
     */
    getAuthorizedAddressesAsync(): Promise<string[]>;
    /**
     * Retrieves the Ethereum address of the TokenTransferProxy contract deployed on the network
     * that the user-passed web3 provider is connected to.
     * @returns The Ethereum address of the TokenTransferProxy contract being used.
     */
    getContractAddress(): string;
    private _invalidateContractInstance();
    private _getTokenTransferProxyContractAsync();
}
