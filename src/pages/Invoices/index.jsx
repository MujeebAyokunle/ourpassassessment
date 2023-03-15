import React from 'react'
import NavWrapper from '../../components/NavWrapper'
import { CgOptions } from 'react-icons/cg'
import { AiOutlinePlus } from 'react-icons/ai'

import './styles.css'

function Invoices() {
    return (
        <div style={{ marginBottom: "50px" }}>
            <NavWrapper >
                <div className='container' >
                    <div>
                        <p className="split_nav_texts" >
                            Invoice<span className="edit_inv_txt">/ edit invoice</span><span className="edit_inv_txt">(INV-2022-010)</span>
                        </p>
                    </div>

                    {/* Invoice Information */}
                    <div className='info_container'>
                        <div className="space_out">
                            <div style={{ display: 'flex', alignItems: 'flex-start' }} >
                                <img alt="inv_logo" className='invoice_icon' src={require("../../assets/inhouseicon.webp")} />
                                <div>
                                    <p className='title' >Dipa Inhouse</p>
                                    <p className='email'>hello@dipainhouse.com</p>
                                </div>
                            </div>
                            <div >
                                <p> Ijen Boulevard Street 101 </p>
                                <p> malang city, 65115 </p>
                                <p> East Java, Indonesia </p>
                            </div>
                        </div>

                        <div className='inv_details' >
                            <div>
                                <p>Invoice Number</p>
                                <p>INV-2022-10</p>
                                <p> <span className='slim' >Issued Date: </span> 11 Jan 2022</p>
                                <p> <span className='slim'> Due Date: </span> 18 Jan 2022</p>
                            </div>

                            <div>
                                <p>Billed to</p>
                                <p>Zaky Grizzly</p>
                                <p> Monlight Agency LTD</p>
                                <p> New  York, USA</p>
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
                                        <input placeholder='Payment Project - Monlight Mobile Design' />
                                    </div>

                                    <div className="others_container">
                                        <input placeholder='120' />
                                    </div>

                                    <div className="others_container">
                                        <input placeholder='$40.00' />
                                    </div>

                                    <div className="others_container">
                                        <input placeholder='$0.00' />
                                    </div>

                                    <div className="total_container">
                                        <input placeholder='$4,800.00' />
                                    </div>

                                </div>
                                <input className='description' placeholder='Description' />
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
                                            <p>Account Name: <span className='bold_span'>Barly Vallendito</span></p>
                                            <p>Account Number: <span className='bold_span'>9700 0023 4200 2900</span></p>
                                            <p>Routing Number: <span className='bold_span'>084009519</span></p>
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
                                            <p>$0.00</p>
                                            <p>$0.00</p>
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