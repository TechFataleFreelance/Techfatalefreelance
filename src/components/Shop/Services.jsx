import React from 'react'

const Services = () => {
  return (
    <div className="pt-[11%] pb-[11%] bg-[#a2b8cd]">
   <stripe-pricing-table pricing-table-id="prctbl_1OFv24DfLzbgVP4WC8osoQOG"
publishable-key={import.meta.env.VITE_PUBLISHABLE_KEY}>
</stripe-pricing-table>
    </div>
  )
}

export default Services
