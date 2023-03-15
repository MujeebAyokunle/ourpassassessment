import React, { useEffect, useState } from 'react'
import NavWrapper from '../../components/NavWrapper'
import { CgOptions } from 'react-icons/cg'
import { AiOutlinePlus } from 'react-icons/ai'

import './styles.css'

function Invoices() {

    const [details, setDetails] = useState({})

    useEffect(() => {
        fetch('/api/invoice')
            .then(res => res.json())
            .then(data => {
                console.log("response data ", data)
                setDetails(data)
            })
            .catch(err => console.log("invoice api err:", err))
    }, [])

    return (
        <div style={{ marginBottom: "50px" }}>
            <NavWrapper >
                <div className='container' >
                    <div>
                        <p className="split_nav_texts" >
                            Invoice<span className="edit_inv_txt">/ edit invoice</span><span className="edit_inv_txt">({details?.inv_id})</span>
                        </p>
                    </div>

                    {/* Invoice Information */}
                    <div className='info_container'>
                        <div className="space_out">
                            <div style={{ display: 'flex', alignItems: 'flex-start' }} >
                                <img alt="inv_logo" className='invoice_icon' src={require("../../assets/inhouseicon.webp")} />
                                <div>
                                    <p className='title' >{details?.company?.name}</p>
                                    <p className='email'>{details?.company?.email}</p>
                                </div>
                            </div>
                            <div >
                                <p> {details?.company?.address} </p>
                                <p> {details?.company?.city} </p>
                                <p> {details?.company?.country} </p>
                            </div>
                        </div>

                        <div className='inv_details' >
                            <div>
                                <p>Invoice Number</p>
                                <p>{details?.inv_id}</p>
                                <p> <span className='slim' >Issued Date: </span> {details?.customer?.issued_date}</p>
                                <p> <span className='slim'> Due Date: </span> {details?.customer?.due_date}</p>
                            </div>

                            <div>
                                <p>Billed to</p>
                                <p>{details?.customer?.name}</p>
                                <p> {details?.customer?.company}</p>
                                <p> {details?.customer?.address}</p>
                            </div>
                        </div>

                        {/* Item details */}
                        <div>
                            <div className='page_space_out' style={{ marginTop: 30 }}>
                                <div>
                                    <p>Item Detail</p>
                                    <p>Type item for Hours item.</p>
                                </div>

                                <div className='row cutomize'>
                                    <CgOptions style={{ color: '#3A37C7' }} />
                                    <p>Customize</p>
                                </div>
                            </div>
                        </div>

                        <hr color="#f0f0f0" className='line' />

                        <div className="row">
                            <div className="item_title_container">
                                <p>Item Name</p>
                            </div>

                            <div className="others_container">
                                <p>Hours</p>

                            </div>

                            <div className="others_container">
                                <p>Rate/hr</p>

                            </div>

                            <div className="others_container">
                                <p>Tax</p>

                            </div>

                            <div className="total_container">
                                <p>Line Total</p>

                            </div>

                            <div>
                                <p>&nbsp;</p>

                            </div>
                        </div>

                        <div className="row">
                            <div style={{ width: '100%' }} >
                                <div className='items_list'>
                                    <div className="item_title_container">
                                        <input placeholder={details?.items?.name} disabled />
                                    </div>

                                    <div className="others_container">
                                        <input placeholder={details?.items?.hours} disabled />
                                    </div>

                                    <div className="others_container">
                                        <input placeholder={`$${details?.items?.rate}`} disabled />
                                    </div>

                                    <div className="others_container">
                                        <input placeholder={`$${details?.items?.tax}`} disabled />
                                    </div>

                                    <div className="total_container">
                                        <input placeholder={`$${parseFloat(parseFloat((details?.items?.rate) * parseInt(details?.items?.hours)) + parseFloat(details?.items?.tax)).toFixed(2)}`} disabled />
                                    </div>

                                </div>
                                <input className='description' placeholder='Description' disabled />
                            </div>
                            <div className="last_container">
                                <div>
                                    <AiOutlinePlus color="#fff" className='plus' />
                                </div>
                            </div>
                        </div>

                        <hr color="#f0f0f0" className='line' />

                        {/* Payment Details */}
                        <div className="space_out_paymentdetails">

                            <div className="row payment_container" >
                                <div style={{ width: "100%", display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <div>
                                        <p>Payment Method</p>

                                        <div className='account_details'>
                                            <p>Wire Transfer</p>
                                            <p>Account Name: <span className='bold_span'>{details?.payment_method?.account_name}</span></p>
                                            <p>Account Number: <span className='bold_span'>{details?.payment_method?.account_number}</span></p>
                                            <p>Routing Number: <span className='bold_span'>{details?.payment_method?.routing_number}</span></p>
                                        </div>
                                    </div>

                                    <div>
                                        <p>Select Payment</p>
                                        <div className='bank_details'>
                                            <img src={require("../../assets/wiselogo.png")} className="wise_logo" />
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className="payment_container2" >
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                    <div >
                                        <p>Sub Total</p>
                                        <div className='account_details2'>
                                            <p>Discount</p>
                                            <p>Total tax</p>
                                        </div>

                                    </div>
                                    <div>
                                        <p>$4,800.00</p>
                                        <div className='price_details'>
                                            <p>${details?.discount}</p>
                                            <p>${details?.tax}</p>
                                        </div>
                                    </div>
                                </div>
                                <hr className='total_line' color="#f0f0f0" />

                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                                    <div className='account_details2'>
                                        <p>Total Amount</p>
                                    </div>
                                    <div>
                                        <p>$4,800.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </NavWrapper >
        </div >
    )
}

export default Invoices