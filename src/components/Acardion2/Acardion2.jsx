import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Acardion.scss";

function Acardion2() {
  return (
    <div className="accordion">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Гарантия лучшей цены</Accordion.Header>
          <Accordion.Body>
            <div className="accordion-text">
              <p>
                Если вы нашли данную модель где-либо в наличии по более низкой
                цене — пришлите нам ссылку на данную модель в другом магазине.
                Мы будем рады предложить вам скидку, компенсирующую разницу в
                стоимости, и лучшую цену относительно конкурентов.Обратите
                внимание, что акция распространяется только на российские
                платформы.
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Как и когда я смогу получить выплату за реализованный товар?
          </Accordion.Header>
          <Accordion.Body>
            <div className="accordion-text2">
              <p>
                Вы получаете выплаты на Ваши реквизиты, прописанные в договоре.
                Срок выполнения платежа - 14 календарных дней с даты получения
                клиентом товара.
              </p>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Acardion2;
