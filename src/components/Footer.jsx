import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Footer = (props) => {
  return (
    <React.Fragment>
      <FooterBox>
        <TextBox>
          <TextBox>
            <ImageFont>Backend</ImageFont>
            <a
              href="https://github.com/SeongeunYang/sout-BackEnd"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon
                sx={{ color: '#ddc6b6', marginLeft: '10px', cursor: 'pointer' }}
              />
            </a>
          </TextBox>
          <TextBox>
            <ImageFont>Frontend</ImageFont>
            <a
              href="https://github.com/mtae616/sout-FrontEnd"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon sx={{ color: '#ddc6b6', marginLeft: '10px' }} />
            </a>
          </TextBox>
        </TextBox>
      </FooterBox>
    </React.Fragment>
  )
}

const FooterBox = styled.div`
  width: 100%;
  height: 10vh;
  margin: 50px 0px 0px 0px;
  background: ${({ theme }) => theme.color.background};
`

const TextBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ImageFont = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.primary};
`

export default Footer
