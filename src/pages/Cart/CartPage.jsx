import React, { useState } from "react";
import { useShop } from "../../Context/ShopContext";

import {
  CartWrapper,
  Title,
  CartBox,
  CartHead,
  CartRow,
  ProductImg,
  ProductInfo,
  Article,
  QtyBox,
  DeleteBtn,
  OrderBox,
  Inputs,
  AddressInput,
  Comment,
  PaymentBox,
  PaymentRow,
  Total,
  BuyBtn,
  Agree,
} from "./Cart.styled";

const CartPage = () => {
  const { cart, updateQty, removeFromCart, clearCart } = useShop();
  const [agree, setAgree] = useState(false);

  // ✅ PRICE STRING → NUMBER
  const getPriceNumber = (price) => {
    if (typeof price === "number") return price;
    return Number(price.replace(/\s/g, "").replace("₽", ""));
  };

  const productsSum = cart.reduce(
    (sum, item) => sum + getPriceNumber(item.price) * item.qty,
    0
  );

  const delivery = cart.length ? 580 : 0;
  const total = productsSum + delivery;

  const buyHandler = () => {
    if (!cart.length) {
      alert("Корзина пуста 🛒");
      return;
    }

    if (!agree) {
      alert("Подтвердите согласие на обработку данных");
      return;
    }

    alert(`✅ Заказ оформлен!\nСумма: ${total.toLocaleString()} ₽`);
    clearCart();
    setAgree(false);
  };

  return (
    <CartWrapper className="container">
      <Title>Корзина</Title>

      <CartBox>
        <CartHead>
          <span>Фото</span>
          <span>Товары</span>
          <span>Артикул</span>
          <span>Количество</span>
          <span />
        </CartHead>

        {cart.length === 0 && (
          <p style={{ padding: "20px" }}>Корзина пуста 🛒</p>
        )}

        {cart.map((item) => (
          <CartRow key={item.id}>
            <ProductImg src={item.image} />

            <ProductInfo>
              <h4>{item.title}</h4>
              <b>{getPriceNumber(item.price).toLocaleString()} ₽</b>
            </ProductInfo>

            <Article>{item.article || "—"}</Article>

            <QtyBox>
              <button
                onClick={() => updateQty(item.id, item.qty - 1)}
                disabled={item.qty <= 1}
              >
                -
              </button>

              <span>{item.qty}</span>

              <button onClick={() => updateQty(item.id, item.qty + 1)}>
                +
              </button>
            </QtyBox>

            <DeleteBtn onClick={() => removeFromCart(item.id)}>🗑</DeleteBtn>
          </CartRow>
        ))}
      </CartBox>

      <OrderBox>
        <h2>Оформление</h2>
        <Inputs>
          <input placeholder="ФИО" />
          <input placeholder="Телефон" />
          <input placeholder="Электронная почта" />
        </Inputs>

        <h2>Доставка</h2>
        <AddressInput placeholder="Адрес доставки" />
        <Comment placeholder="Комментарий" />
      </OrderBox>

      <PaymentBox>
        <h2>Оплата</h2>

        <PaymentRow>
          <span>Товары</span>
          <span>{productsSum.toLocaleString()} ₽</span>
        </PaymentRow>

        <PaymentRow>
          <span>Доставка</span>
          <span>{delivery} ₽</span>
        </PaymentRow>

        <Total>{total.toLocaleString()} ₽</Total>

        <BuyBtn disabled={!cart.length} onClick={buyHandler}>
          Купить
        </BuyBtn>

        <Agree>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <span>Я согласен на обработку персональных данных</span>
        </Agree>
      </PaymentBox>
    </CartWrapper>
  );
};

export default CartPage;
