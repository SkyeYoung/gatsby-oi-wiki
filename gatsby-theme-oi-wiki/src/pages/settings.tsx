import React, { FC } from 'react'
import Layout from '../components/Layout'
import Title from '../components/Title'
import Grid from '@mui/material/Grid'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Switch from '@mui/material/Switch'
import { FormControl, FormLabel } from '@mui/material'
import useThemeMode from '../hooks/useThemeMode'
import { ThemeMode } from '../types/ThemeMode'

const title = '设置页'
const SettingsPage: FC = () => {
  const [theme, setTheme] = useThemeMode()

  return (
    <Layout title={title} withNav={false} withToc={false}>
      <Title noEdit={true} relativePath="">{title}</Title>

      <Grid container={true} direction="column" spacing={2}>
        <Grid item={true}>
          <FormControl>
            <FormLabel>模式</FormLabel>
            <RadioGroup name="theme-mode" onChange={(_, v) => setTheme(v as ThemeMode)} value={theme}>
              <FormControlLabel control={<Radio/>} label="Light" value="light"/>
              <FormControlLabel control={<Radio/>} label="System" value="user-preference"/>
              <FormControlLabel control={<Radio/>} label="Dark" value="dark"/>
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item={true}>
          <FormControl>
            <FormLabel>动画</FormLabel>
            <FormControlLabel label="使用平滑滚动" control={
              <Switch name="animation-smooth-scroll"/>
            }/>
          </FormControl>
        </Grid>

        <Grid item={true}>
          <FormControl>
            <FormLabel>等宽字体</FormLabel>
            <FormControlLabel label="使用浏览器默认字体" control={
              <Switch name="monofont"/>
            }/>
          </FormControl>
        </Grid>

      </Grid>
    </Layout>
  )
}

export default SettingsPage
