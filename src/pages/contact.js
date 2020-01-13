import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Form from '../components/form'
import styles from "../pages/contact.module.css"

const Contact = () => (
    <Layout>
        <SEO title="Contact Page" />
        <div className={styles.contact}>
        <h1>Contact Me</h1>
        <Form /></div>
    </Layout>
)
export default Contact