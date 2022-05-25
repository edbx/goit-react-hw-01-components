import styles from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';


const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>{title}</h2>
            
            <ul className={styles.statList}>
              
             {stats.map(data => 
                <li className={styles.item} key={data.id}>
                    <span className={styles.label}>{data.label}</span>
                    <span className={styles.percentage}>{data.percentage + "%"}</span>
                </li>)}
                
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired,
}


export default Statistics;