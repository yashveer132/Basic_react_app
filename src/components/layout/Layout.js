import classes from './Layout.module.css';
import MainNavigation from './MainNaviagtion';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>
        {props.children}
      </main>
    </div>
  )
}

export default Layout;
