import { NormalizedReceipt } from './schemas/receipt.schema';

export type ReceiptNetwork = 'testnet' | 'mainnet';

export interface PersistedReceeipt {
  txHash: string;
  operationIndex: number;
  network: ReceeiptNetwork;
  receipt: NormalizedReceipt;
  createdAt: Date;
  updatedAt: Date;
}
