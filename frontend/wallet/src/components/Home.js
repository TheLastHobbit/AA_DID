import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import BottomBar from './BottomBar';
import Balance from './Balance';
import '../css/Home.css';
import { Input, Select } from 'antd';
import { getETHBalance } from '../util/wallet';

function Home(){
    const [showInput, setShowInput] = useState(false);
    const [inputAccountNumber, setInputAccountNumber] = useState('');
    const [selectedValue, setSelectedValue] = useState('ETH');
    const options = ['ETH','BTC','USDT']
    const [coin, setCoin] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [balance, setBalance] = useState('');
    // 获取本地存储中的用户信息
    const user = JSON.parse(localStorage.getItem('user_key'));

    useEffect(() => {
        const fetchBalance = async () => {
            if(user && user.walletAddress){
                const balance = await getETHBalance(user.walletAddress);
                setBalance(balance);
                console.log('Balance:', balance);
                console.log('User:', user);
            }
        };
        fetchBalance();
    }, [user])

    if(!user){
        return <div>fail to find user</div>
    }

        
    

    const handleSend = () => {
        // 点击按钮显示输入框
        setShowInput(true);
    }
    const handleAccountChange = (event) => {
        setInputAccountNumber(event.target.value);
    }
    const handleSelectChange = (event) => {
        console.log('Event:',event);
        setSelectedValue(event);
        setCoin(event);
    }
    const handleAmountChange = (event) => {
        setInputAmount(event.target.value);
    }
    const handleConfirm = () => {
        // 处理确认按钮点击事件
        console.log('Send', coin, 'to:', inputAccountNumber);
        console.log('Amount:', inputAmount);
        setShowInput(false);
        setInputAccountNumber('');
        setSelectedValue('');
        setInputAmount('');
    }

    return(
        <div className='home-container'>
            <div className='balance'>
                <Balance message={balance}></Balance>
            </div>
            <div className='send_to'>
                {showInput && (
                    <div>
                        <div className='input'>
                            <Input
                                type="text" 
                                placeholder='Enter the account number'
                                value={inputAccountNumber}
                                onChange={handleAccountChange}
                                />
                        </div>
                        <div className='select'>
                            <Select 
                                className='select_chain'
                                value={selectedValue} 
                                onChange={handleSelectChange}>
                                    {options.map((option, index) => (
                                        <option key={index} value={option}>{option}</option>
                                    ))}
                            </Select>
                        </div>
                        <div className='input'>
                            <Input 
                                type="text" 
                                placeholder='Enter the amount'
                                value={inputAmount}
                                onChange={handleAmountChange}
                                />
                        </div>
                        <div className='button'>
                            <Button onClick={handleConfirm}>Confirm</Button>
                        </div>
                    </div>
                )}
            </div>
            <div>
                { !showInput && (
                    <Button onClick={handleSend} className='send'>
                        Send
                    </Button>
                )}
            </div>
            
            <BottomBar></BottomBar>
        </div>

    

    );
}

export default Home;