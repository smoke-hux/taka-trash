import { FC, useEffect, useState } from 'react'
import { Metadata} from "next"
import Paragraph from '@/components/ui/Paragraph'
import LargeHeading from '@/components/ui/LargeHeading'
import {ethers} from 'ethers';
import { InjectedConnector } from '@web3-react/injected-connector'

//import the contract ABI and the contract address
import ItemSelection from './build/contracts/ItemSelection.json'
const contractAddress = '0xb54ccf5a1044cc6C3049e5AdBC326C9e8b8Fd6bD'

const provider = new ethers.providers.Web3Provider(window.ethereum);
const contract = new ethers.Contract(contractAddress, ItemSelection, provider);


export const metadata: Metadata = {
    title: 'YUGI | Documentation',
    description: 'Waste management Dapp'
}



const page: FC = () => {
  const [numBags, setNumBags] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    try {
      // Convert the selectedItems array to the corresponding enum values
      const pickupDays = selectedItems.map(item => ethers.utils.formatBytes32String(item));
  
      // Call the selectItem function of the contract with the user inputs
      await contract.selectItem(numBags, additionalInfo, pickupAddress, pickupDays);
  
      // Clear the form inputs after the transaction is successful
      setNumBags('');
      setAdditionalInfo('');
      setPickupAddress('');
      setSelectedItems([]);
    } catch (error) {
      console.error('Error submitting user inputs:', error);
    }
  };
  
  return (
    // <div className='container max-w-7xl mx-auto pt-20'>
    //   <div className='flex flex-col items-center gap-6'>
    //     <LargeHeading>Garbage collection scheduling</LargeHeading>
    //     <Paragraph>Schedule the collection</Paragraph>
    //   </div>
    // </div>

    <div className='container max-w-7xl mx-auto pt-20'>
    <div className='flex flex-col items-center gap-6'>
      <LargeHeading>Garbage collection scheduling</LargeHeading>
      <Paragraph>Schedule the collection</Paragraph>

      <form onSubmit={handleSubmit} className="mt-4">
        <label htmlFor="numBags">Number of Bags</label>
        <input
          type="number"
          id="numBags"
          value={numBags}
          onChange={event => setNumBags(event.target.value)}
        />

        <label htmlFor="additionalInfo">Additional Info</label>
        <input
          type="text"
          id="additionalInfo"
          value={additionalInfo}
          onChange={event => setAdditionalInfo(event.target.value)}
        />

        <label htmlFor="pickupAddress">Pickup Address</label>
        <input
          type="text"
          id="pickupAddress"
          value={pickupAddress}
          onChange={event => setPickupAddress(event.target.value)}
        />

      </form>

        {/* Display the selected items */}
        <ul>
          {selectedItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {/* Display the available items */}
        <h4>Available Items:</h4>
        <ul>
          <li onClick={() => setSelected>

          </ul>

          </div>
          </div>
  
  )
}

export default page