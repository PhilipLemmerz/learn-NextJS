import classes from './loading.module.css'

export default function MealsLoading() {
    return(
        <p className={classes.loading}>fetching meals...</p>
    )
}