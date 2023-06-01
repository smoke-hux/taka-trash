'use client'
import { FC, useState, useEffect } from 'react'
import { Button } from './Button'
import { toast } from './toast'

interface MetaMaskButtonProps {}

const MetaMaskButton: FC<MetaMaskButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isConnected, setIsConnected] = useState<boolean>(false)

  const connectWithMetaMask = async () => {
    console.log('is a function')
    if (typeof window.ethereum === 'undefined') {
      toast({
        title: 'MetaMask not installed',
        message: 'Please install MetaMask to connect.',
        type: 'error',
      })
      window.open('https://metamask.io/download.html', '_blank'); // Open MetaMask installation link in a new tab
      return
    }

    try {
      setIsLoading(true)
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      setIsConnected(true) // Set connection status to true
      // Account connected successfully, perform further actions if needed
    } catch (error) {
      toast({
        title: 'Failed to connect to MetaMask',
        message: 'Please try again later.',
        type: 'error',
      })
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // Check if MetaMask is already connected on initial load
    if (typeof window.ethereum !== 'undefined' && window.ethereum.selectedAddress) {
      setIsConnected(true)
    }
  }, [])

  return (
    <>
      {isConnected ? (
        <Button disabled>
          Connected
        </Button>
      ) : (
        <Button onClick={connectWithMetaMask} isLoading={isLoading}>
          Connect with MetaMask
        </Button>
      )}
    </>
  )
}

export default MetaMaskButton
