import styled from 'styled-components';
import {
  BsFillPersonFill,
  BsMap,
  BsFillCalendarEventFill,
} from 'react-icons/bs';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { RandomButton } from './Button';
import { useGlobalContext } from '../context';

const defaultImg = 'https://randomuser.me/api/portraits/men/75.jpg';

const Main = () => {
  const { loading, title, value, person, handleHover, fetchPerson } =
    useGlobalContext();

  return (
    <Wrapper>
      <div className="img-con">
        <img src={(person && person.image) || defaultImg} alt="main" />
      </div>
      <article>
        <div className="text">
          <h4>my {value} is</h4>
          <h2>{title}</h2>
        </div>
        <div className="icon-con">
          <button className="icon" data-label="name" onMouseOver={handleHover}>
            <BsFillPersonFill />
          </button>
          <button
            className="icon"
            data-label="street"
            onMouseOver={handleHover}
          >
            <BsMap />
          </button>
          <button className="icon" data-label="age" onMouseOver={handleHover}>
            <BsFillCalendarEventFill />
          </button>
          <button className="icon" data-label="email" onMouseOver={handleHover}>
            <AiOutlineMail />
          </button>
          <button className="icon" data-label="phone" onMouseOver={handleHover}>
            <AiOutlinePhone />
          </button>
          <button
            className="icon"
            data-label="password"
            onMouseOver={handleHover}
          >
            <RiLockPasswordLine />
          </button>
        </div>
        <footer>
          <RandomButton onClick={fetchPerson}>
            {loading ? 'loading...' : 'get random person'}
          </RandomButton>
        </footer>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 650px;
  height: 450px;
  padding: 35px;
  background: #fff;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.05);
  z-index: 10;
  .img-con {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid #fff;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  article {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    .text {
      margin-top: 20px;
      text-align: center;
      h4 {
        text-transform: capitalize;
        font-size: 22px;
        color: var(--bg-dark);
      }
      h2 {
        text-transform: capitalize;
        font-size: 35px;
        color: var(--bg-dark);
      }
    }
    .icon-con {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      gap: 20px;
      button {
        display: inline-block;
        font-size: 30px;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 8px 15px;
        color: var(--bg-dark);
        background: transparent;
        border: none;
        cursor: pointer;
        z-index: 10;
        transition: 0.3s ease-out;
        &:hover {
          color: var(--primary);
        }
      }
    }
  }
  @media (max-width: 415px) {
    padding: 20px;
    article .icon-con {
      gap: 0px;
    }
  }
`;

export default Main;
