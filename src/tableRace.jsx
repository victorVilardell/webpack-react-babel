import React from 'react';
import tableRowRace from './tableRowRace.jsx';

export default class tableRace extends React.Component {
  render() {
    return (
     <section>
        {
            this.props.dataRace.map((race) => {
              return <tableRowRace
                    raceName= {race.RaceName}
                   round= {race.round}
                   season= {race.season}
                   ancor= {race.url}
                   circuit= {race.Circuit.CircuitName}
                   location= {race.Location.Locality}
                   country= {race.Location.Country}
                   date= {race.Date} />
            })
        }
      </section>
    )
  }
}
