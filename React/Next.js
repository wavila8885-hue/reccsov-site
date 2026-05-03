npm install thirdweb
import { BuyWidget, TransactionWidget } from "thirdweb/react";
import { ethereum } from "thirdweb/chains";

const RECSOV_ADDRESS = "0x4bc6C69BDf4F42EE3341f959a16A98f5858733a4";
const CLIENT_ID = "321ce8aef676da19da64c1e9411feb1b";

export function RecsovSection() {
  return (
    <section className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-xl shadow-lg space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-center">
          Buy RECSOV Instantly
        </h2>
        <p className="mb-4 text-center text-gray-600">
          Use credit card, Apple Pay, or crypto to buy RECSOV directly.
        </p>
        <BuyWidget
          client={CLIENT_ID}
          tokenAddress={RECSOV_ADDRESS}
          chain={ethereum}
          title="Buy RECSOV"
          theme="light"
          amount="100"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2 text-center">
          Swap Any Token for RECSOV
        </h2>
        <p className="mb-4 text-center text-gray-600">
          Seamlessly swap ETH, USDC, or USDT for RECSOV.
        </p>
        <TransactionWidget
          client={CLIENT_ID}
          chain={ethereum}
          title="Swap for RECSOV"
          theme="light"
        />
      </div>
    </section>
  );
}
