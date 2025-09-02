import React from 'react'

export default function Footer() {
  return <div className= "footer bg-second row m-0 pt-5 text-center">
        <div className="about-footer row justify-content-between">
            <div className='location col-4 m-0 p-5'>
                <h2 className='text-uppercase fs-3'>Location</h2>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className='around-the-web col-4 m-0 p-5 text-center'>
                <h2 className='text-uppercase fs-3'>Around The Web</h2>
                <div className='social-icons pt-3'>
                    <a href='#' className='mx-2 p-2 border rounded-circle'><i className="fa-brands fa-facebook-f"></i></a>
                    <a href='#' className='mx-2 p-2 border rounded-circle'><i className="fa-brands fa-twitter"></i></a>
                    <a href='#' className='mx-2 p-2 border rounded-circle'><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href='#' className='mx-2 p-2 border rounded-circle'><i className="fa-brands fa-dribbble"></i></a>
                </div>  
            </div>
            <div className='about freelancer col-4 m-0 p-5 text-center'>
                <h1 className='text-uppercase fs-3'>about freelancer</h1>
                <p>Freelance is a frere to use, licensed Bootstrap theme created by Borhom</p>
            </div>
        </div>
        <div className="copyright text-center py-4 bg-third">
            Copyright &copy; Start Framework Website 2026 | Design By <a href='https://github.com/Elghrabawy'>Borhom</a>
        </div>
    </div>
}
