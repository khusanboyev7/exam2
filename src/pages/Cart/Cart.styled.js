import styled from "styled-components";

export const CartWrapper = styled.section`
  padding: 40px 0 80px;
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 24px;
`;

export const CartBox = styled.div`
  border: 2px solid #1e90ff;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 40px;
`;

export const CartHead = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 220px 160px 40px;
  gap: 16px;
  color: #999;
  font-size: 14px;
  margin-bottom: 16px;
`;

export const CartRow = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 220px 160px 40px;
  gap: 16px;
  align-items: center;
  padding: 16px 0;
  border-top: 1px solid #eee;
`;

export const ProductImg = styled.img`
  width: 70px;
`;

export const ProductInfo = styled.div`
  h4 {
    margin: 0 0 6px;
    font-size: 16px;
  }

  b {
    font-size: 15px;
  }
`;

export const Article = styled.span`
  font-size: 14px;
  color: #777;
`;

export const QtyBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    border: 1px solid #ccc;
    background: #fff;
    cursor: pointer;
    font-size: 18px;
  }
`;

export const DeleteBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

export const OrderBox = styled.div`
  background: #f7f7f7;
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 32px;

  h2 {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

export const Inputs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;

  input {
    padding: 14px 18px;
    border-radius: 100px;
    border: 1px solid #ccc;
  }
`;

export const AddressInput = styled.input`
  width: 100%;
  padding: 14px 18px;
  border-radius: 100px;
  border: 1px solid #ccc;
  margin-bottom: 16px;
`;

export const Comment = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 16px 18px;
  border-radius: 16px;
  border: 1px solid #ccc;
  resize: none;
`;

export const PaymentBox = styled.div`
  background: #f7f7f7;
  border-radius: 16px;
  padding: 32px;

  h2 {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

export const PaymentRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #777;
  margin-bottom: 12px;
`;

export const Total = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 24px 0;
`;

export const BuyBtn = styled.button`
  background: #444;
  color: #fff;
  border: none;
  padding: 14px 36px;
  border-radius: 100px;
  cursor: pointer;
  font-size: 15px;
`;

export const Agree = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #777;
  margin-top: 16px;
`;
