import { useNavigate } from 'react-router-dom'

function OrderSummary() {
    const navigate = useNavigate()
    return (
        <>
            <h2> Order Confirmed </h2>
            <button onClick={() => { navigate(-1) }} > Go Back</button>
        </>
    )
}

export default OrderSummary