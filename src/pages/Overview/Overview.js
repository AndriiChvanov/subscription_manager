import React, { useState } from "react";
import "./Overview.css";
import { UiContainer } from "@components/ui/UiContainer";
import { dateFormatToday, dateFormatMonth } from "@helpers/dateTimeFormated";
import { useSelector } from "react-redux";
import { ButtonClose } from "@icons/buttonClose";
import { ButtonOpen } from "@icons/buttonOpen";
import { OverviewChartClose } from "@components/OverviewChartClose";
import { OverviewChartOpen } from "@components/OverviewChartOpen";
import { Menu } from "@components/Menu";

export function Overview(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const overviewInfo = useSelector((state) => state.overview.overview_info);

  const filterMonth = Object.values(overviewInfo).filter((date) => {
    const month = JSON.stringify(date);
    return month.indexOf(dateFormatMonth()) !== -1;
  });
  const handleOpenModal = () => {
    modalOpen === true ? setModalOpen(false) : setModalOpen(true);
  };
  return (
    <div className="overview">
      <h2 className="overview-title__h2 subscription__text">
        {dateFormatToday()}
      </h2>
      <div className="overview-spent__month">
        <p className="overview-text subscription__p">you've spent</p>
        <h1 className="overview-title__h1 subscription__h1">
          {filterMonth.length === 0 ? "$0" : `$${filterMonth[0].total}`}
        </h1>
        <p className="overview-text subscription__p">this month</p>
      </div>
      <UiContainer className="overview-container ui-container">
        <div className="overview-container__title">
          <h2 className="overview-title__h2 subscription__text">Overview</h2>
          <button className="overview-btn" onClick={handleOpenModal}>
            {modalOpen === false ? <ButtonClose /> : <ButtonOpen />}
          </button>
        </div>
        <div className="overview-container__chart ">
          {modalOpen === false ? (
            <OverviewChartClose months={overviewInfo} />
          ) : (
            <OverviewChartOpen months={overviewInfo} />
          )}
        </div>
      </UiContainer>
      <Menu />
    </div>
  );
}
