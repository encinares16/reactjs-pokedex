import '../styles/Lightbox.css'
import { PokedexCard } from './PokedexCard'
import PropTypes from 'prop-types';

export const Lightbox = ({ data, isLoading }) => {

  // console.log(data == 0)

  return (
    <div id='lightbox'>
        {data == 0 ? '' : <PokedexCard data={data} loading={isLoading} /> }
    </div>
  )
}

Lightbox.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.object
}





