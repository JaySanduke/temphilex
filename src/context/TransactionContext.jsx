import React, { useEffect, useState } from "react";
import { ethers, formatEther, parseEther, formatUnits } from "ethers";

import { contractABI, contractAddress } from "../contracts/Edu.jsx";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {

    const network = {
        name: 'cronos',
        chainId: 338,
    }

    const provider = new ethers.JsonRpcProvider('https://evm-t3.cronos.org/', network);
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, provider);

    return transactionsContract;
};

export const TransactionsProvider = ({ children }) => {
    const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
    const [currentAccount, setCurrentAccount] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [decimals, setDecimals] = useState("");
    const [totalSupply, setTotalSupply] = useState("");
    const [balance, setBalance] = useState("");

    const handleChange = (e, name) => {
        setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
    };

    // update account, will cause component re-render
    const accountChangedHandler = (newAccount) => {
        setCurrentAccount(newAccount);
    }

    const chainChangedHandler = () => {
        // reload the page to avoid any errors with chain change mid use of application
        window.location.reload();
    }

    ethereum.on('accountsChanged', accountChangedHandler);
    ethereum.on('chainChanged', chainChangedHandler);

    useEffect(() => {
        // checkIfWalletIsConnect();
        if (ethereum.isConnected()) {
            checkIfWalletIsConnect();
        }

        return () => { }
    }, []);

    const checkIfWalletIsConnect = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");

            const accounts = await ethereum.request({
                method: "eth_accounts"
            });

            if (accounts.length) {
                accountChangedHandler(accounts[0]);

                // getAllTransactions();
            } else {
                console.log("No accounts found");
            }
        } catch (error) {
            console.log(error);
        }
    };

    ethereum.on('connect', () => {
        checkIfWalletIsConnect()

    });

    useEffect(() => {
        if (currentAccount) {
            getBalanceOf(currentAccount).then((balance) => {
                const balanceInEther = formatUnits(balance, 18);
                setBalance(balanceInEther);
                console.log(balance);
            });
        }
        getSymbol().then((symbol) => {
            setSymbol(symbol);
        });
        getName().then((name) => {
            setName(name);
        });
        getDecimals().then((decimals) => {
            setDecimals(decimals);
        });
    }, [currentAccount]);

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask.");

            const accounts = await ethereum.request({
                method: "eth_requestAccounts"
            });

            accountChangedHandler(accounts[0])
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object");
        }
    };

    const getName = async () => {
        const contract = createEthereumContract();
        const name = await contract.name();
        return name;
    }

    const getSymbol = async () => {
        const contract = createEthereumContract();
        const symbol = await contract.symbol();
        return symbol;
    }

    const getDecimals = async () => {
        const contract = createEthereumContract();
        const decimals = await contract.decimals();
        return decimals;
    }

    const getTotalSupply = async () => {
        const contract = createEthereumContract();
        const totalSupply = await contract.totalSupply();
        return totalSupply;
    }

    const getBalanceOf = async (address) => {
        const contract = createEthereumContract();
        const balanceOf = await contract.balanceOf(address);
        return balanceOf;
    }

    return (
        <TransactionContext.Provider
            value={{
                connectWallet,
                currentAccount,
                isLoading,
                handleChange,
                formData,
                getName,
                getSymbol,
                getDecimals,
                getTotalSupply,
                getBalanceOf,
                symbol,
                balance
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
};