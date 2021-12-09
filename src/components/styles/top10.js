import styled from 'styled-components'
import { colors } from './theme'

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  padding-top: 4rem;
  padding-bottom: 6rem;
  .contain-both {
    gap: 7rem;
  }
  .title {
    font-weight: bold;
  }
  .separator {
    padding-bottom: 4rem;
  }
  .images-zone {
    max-width: 856px;
    img {
      width: 856px;
      height: 495px;
      object-fit: cover;
    }
    .other-images {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 157px));
      margin-top: 1.1rem;
      gap: 1.1rem;
      img {
        width: 157px;
        height: 110px;
        object-fit: cover;
      }
      @media (max-width: 525px) {
        grid-template-columns: repeat(auto-fit, minmax(100px, 137px));
        img {
          width: 137px;
          height: 110px;
        }
      }
    }
  }
  .info-zone {
    .number {
      padding: 0.3rem 0.9rem;
      border: 1px solid ${colors.black};
      font-family: 'Montserrat-Bold', sans-serif;
      font-size: 1.5rem;
    }
    .medium-text {
      font-size: 1.2rem;
    }
    .big-text {
      font-size: 2.4rem;
    }
    #old-price {
      text-decoration: line-through;
    }
    #save {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .mb-big {
      margin-bottom: 5rem;
    }
    .small-text {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 1392px) {
    .images-zone {
      img {
        width: 600px;
        height: 346px;
      }
    }
  }
  @media (max-width: 1137px) {
    .contain-both {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3rem;
    }
    .info-zone {
      max-width: 856px;
    }
    .images-zone {
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`
