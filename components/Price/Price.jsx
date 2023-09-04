"use client"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";


const Price = ({ price, options, id, title, img }) => {
    const dispatch = useDispatch()
    const [total, setTotal] = useState(price);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategorySelection = (category,index) => {
        setSelectedCategory(category);
        setSelected(index)
    };

    const AddcountHandler = () => {
        setQuantity(prev => prev < 9 ? prev + 1 : 9)
    }
    const RemovecountHandler = () => {
        setQuantity(prev => prev <= 1 ? 1 : prev - 1)
    }

    useEffect(() => {
        setTotal(quantity * (price + options[selected].additionalPrice))
    }, [selected, quantity, options, price])


    
    return (
        <div className="flex flex-col gap-10">
            <span className="font-bold text-2xl text-red-500">
                ${total.toFixed(2)}
            </span>
            <div className="flex gap-10">
                {options.map((opt, index) => (
                    <button className="border-solid border-2 border-red-500
                    py-2 px-4 rounded"
                        key={index}
                        style={{
                            background: selected === index ? "rgb(239 68 68)" :
                            "white",
                            color: selected === index ? "white" : "red"
                        }}
                        onClick={() => handleCategorySelection(opt.title,index)}
                    >{opt.title}</button>
                ))
                }
            </div>
            <div className="flex flex-col gap-5 md:flex-row md:gap-0">
                <div className="flex justify-between
                border-solid border-2 border-red-500 
                px-6 py-2 md:px-10 md:rounded-tl md:rounded-bl w-full">
                    <p className="">Quantity</p>
                    <button onClick=
                        {RemovecountHandler}>{"-"}</button>
                    <span className="">{`${quantity}`}</span>
                    <button onClick=
                        {AddcountHandler}>{"+"}</button>
                </div>
                <button className=" bg-red-500 text-white 
                border-solid border-2 border-red-500 px-3 py-2 w-56
                md:rounded-tr md:rounded-br"
                    onClick={() => dispatch(addToCart({
                        id,
                        title,
                        img,
                        total,
                        quantity,
                        options:selectedCategory,
                    }))}>
                    ADD TO CART</button>
            </div>
        </div>
    )
}

export default Price;