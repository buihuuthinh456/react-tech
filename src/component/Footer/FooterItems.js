


function FooterItems(){
    
    const listItems = [
        {
            heading:"About Us",
            list:[
                {
                    text:'How it works',
                    url:'#'
                },
                {
                    text:'Testimonials',
                    url:'#'
                },
                {
                    text:'Careers',
                    url:'#'
                },
                {
                    text:'Invenstors',
                    url:'#'
                },
            ]
        },
        {
            heading:"Services",
            list:[
                {
                    text:'Submit Video',
                    url:'#'
                },
                {
                    text:'Agency',
                    url:'#'
                },
                {
                    text:'Influencer',
                    url:'#'
                },
            ]
        },
        {
            heading:"Contact",
            list:[
                {
                    text:'Contact',
                    url:'#'
                },
                {
                    text:'Support',
                    url:'#'
                },
                {
                    text:'Destination',
                    url:'#'
                },
            ]
        },
        {
            heading:"Social Media",
            list:[
                {
                    text:'Facebook',
                    url:'#',
                    icon:'fab fa-facebook-f',
                },
                {
                    text:'Instagram',
                    url:'#',
                    icon:'fab fa-instagram',
                },
                {
                    text:'Twitter',
                    url:'#',
                    icon:'fab fa-twitter',
                },
            ]
        },
    ]
    return (
        <>
        {listItems.map((item,index)=>{
            return (
                <div className="footer-items" key={index}>
                    <h3 className="footer-items__heading">
                                {item.heading}
                    </h3>
                    <ul className="footer-items__list">
                        {item.list.map((name,index)=>
                        (<li className="footer-list-item" key={index}>
                            <a className="footer-list-item-links" href={name.url}>
                                {name.icon!=='' ? (<i className={name.icon}></i>):''}
                                <span>{name.text}</span>
                            </a>
                        </li>))}
                    </ul>
                </div>
            )
        })}
        </>
    )
}

export default FooterItems