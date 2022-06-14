import { Box, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar = () => {
  return (
    <Drawer
        anchor='left'
        open={true}
        onClose={ () => console.log('Cerrando')}
    >
        <Box sx={{ width: '250px' }}>
            <Box sx={{ padding:'5px 10px' }}>
                <Typography variant="h4">Menu</Typography>
            </Box>

            <List>
                {
                    menuItems.map( (text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                { index % 2 ? <InboxOutlinedIcon/> : <EmailOutlinedIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))
                }
            </List>

            <Divider />

        </Box>
    </Drawer>
  )
}
