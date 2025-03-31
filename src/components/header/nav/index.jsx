import React from "react"
import { Navbar } from "../style"
import { bool } from "prop-types"
import Navigation from "../../../data/navigation"
import { Link } from "gatsby"
const Index = ({ open }) => {
  return (
    <>
      <Navbar open={open} className="inside navbar">
        {Navigation.map((dtNavigate, Key) => {
          return (
            <li key={Key}>
              <Link to={`${dtNavigate.url}`} noSSR>{dtNavigate.name}</Link>
              {/* <Link to={`${dtNavigate.url}`} noSSR={`${dtNavigate?.ssr}`}>{dtNavigate.name}</Link> */}
              {dtNavigate.submenu ? (
                <ul className='submenu'>
                  {dtNavigate.submenu.map((dt, key) => {
                    return (
                      <li key={key}>
                        <Link to={dt.url}>{dt.title}</Link>
                      </li>
                    )
                  })}
                </ul>
              ) : null}
            </li>
          )
        })}
      </Navbar>
    </>
  )
}
Index.propTypes = {
  open: bool.isRequired,
}
export default Index
