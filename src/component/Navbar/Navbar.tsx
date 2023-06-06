import * as S from "@/component/Navbar/Navbar.styled";
import google_calendar_logo from "@/assets/google_calendar_logo_2x.png";
import { IconBxChevronRight, IconBxsChevronLeft } from "@/component/Icon/Icon";

const Navbar = () => {
  return (
    <S.Nav>
      <S.LogoWrap>
        <S.Logo source={google_calendar_logo} />
        <S.Text>Calendar</S.Text>
      </S.LogoWrap>

      <S.TooltipWrap>
        <S.ButtonIconWrap>
          <S.Button>Today</S.Button>
          <S.IconWrap>
            <S.Icon>{<IconBxsChevronLeft />}</S.Icon>
          </S.IconWrap>
          <S.IconWrap>
            <S.Icon>{<IconBxChevronRight />}</S.Icon>
          </S.IconWrap>
          <S.Text>June 2023</S.Text>
        </S.ButtonIconWrap>

        <S.SelectBox>
          <label htmlFor="date" />
          <select name="date" id="date">
            <option selected={true} value="month">
              Month
            </option>
            <option value="week">Week</option>
            <option value="day">Day</option>
          </select>
        </S.SelectBox>
      </S.TooltipWrap>
    </S.Nav>
  );
};

export default Navbar;
