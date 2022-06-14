import { Box } from "@mui/material"
import Head from "next/head"
import {FC} from 'react'

interface Props {
    title?: string;
    children?: React.ReactNode | undefined;
}

const Layout:FC<Props> = ({ title = 'OpenJira', children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
        <Head>
            <title> { title } </title>
        </Head>

        <Box sx={{ padding: '10px 20px' }}>
            { children }
        </Box>

    </Box>
  )
}

export default Layout