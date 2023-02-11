import styled from "styled-components";
import flag1 from '../../assets/icons/us.png';
import flag2 from '../../assets/icons/nami.png';
import flag3 from '../../assets/icons/flag1.png';
import flag4 from '../../assets/icons/flag2.png';
import { Link } from 'react-router-dom';
const Card = () => {
  return (
    <CardWrapper>
      <div className="content">
      <Link to="live-commentry">
        <div className='live-section'>
        <div className='live-card'>
            <h4 style={{ fontWeight: "bold", color: 'GhostWhite', }}>
            ICC CRICKET WORLD CUP LEAGUE TWO 2019-23
            </h4>
            <h3 style={{ fontWeight: "bold", color: 'GhostWhite', marginTop: 20 }}>
            United States vs Namibia,
            </h3>
            <p style={{ color: 'GhostWhite' }}>Nov 26  •  1:30 PM at Windhoek, Wanderers Cricket Ground</p>
            <div className='flag-contain'>
            <div>
                <img src={flag3} style={{ height: 50, width: 50 }}></img>
                <p style={{ color: '#fff', fontSize: 18, textAlign: 'center', paddingTop: 8, fontWeight: 'bold' }}>173/3 (20)</p>
            </div>
            <h2 style={{ color: '#fff', alignSelf: 'center' }}>V/S</h2>
            <div>
                <img src={flag2} style={{ height: 50, width: 50 }}></img>
                <p style={{ color: 'yellow', fontSize: 18, textAlign: 'center', paddingTop: 8, fontWeight: 'bold' }}>Innings Break</p>
            </div>
            </div>
        </div>
        </div>
    </Link>
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  border-radius: 8px;
  background: #f5f5f6;

  .image-container {
    height: 168px;
    border-radius: 8px 8px 0 0;
    overflow: hidden;

    @media (min-width: 832px) {
      height: 192px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    padding: 24px 16px 31px;

    .heading {
      .heading__title {
        font-weight: 400;
        font-size: 28px;
        padding-bottom: 10px;
        line-height: 34px;
      }

      .heading__subtitle {
        font-weight: 600;
        font-size: 25px;
        color: #4b4c53;
        padding-bottom: 19px;
      }
    }

    .details {
      .details__text {
        font-weight: 200;
        line-height: 26px;
        color: #4b4c53;
        font-size: 15px;
        padding-bottom: 31px;
        word-spacing: 1px;
      }

      .details__btn {
        border: none;
        background: none;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
        word-spacing: -4px;
        color: #6267a1;
      }
    }

    .next-line {
      display: inline-block;
    }
  }
`;

export default Card;
