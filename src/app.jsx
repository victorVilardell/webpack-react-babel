import React from 'react';
//import Parser from 'xml2json';
import tableRace from './tableRace.jsx';
import '../styles/index.scss';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { dataRace: [] }
  }

  componentWillMount() {
    /*fetch('http://ergast.com/api/f1/current')
      .then((response) => {
        return Parser.toJson(response);
      })
      .then((properties) => {
        debugger;
        this.setState({ properties: properties.properties })
      })*/

      this.setState({ dataRace: [
                                    {
                                      "season": "2017",
                                      "round": "1",
                                      "url": "https://en.wikipedia.org/wiki/2017_Australian_Grand_Prix",
                                      "RaceName": "Australian Grand Prix",
                                      "Circuit": {
                                        "-circuitId": "albert_park",
                                        "url": "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
                                        "CircuitName": "Albert Park Grand Prix Circuit",
                                        "Location": {
                                          "lat": "-37.8497",
                                          "long": "144.968",
                                          "Locality": "Melbourne",
                                          "Country": "Australia"
                                        }
                                      },
                                      "Date": "2017-03-26",
                                      "Time": "05:00:00Z"
                                    },
                                    {
                                      "season": "2017",
                                      "round": "2",
                                      "url": "https://en.wikipedia.org/wiki/2017_Chinese_Grand_Prix",
                                      "RaceName": "Chinese Grand Prix",
                                      "Circuit": {
                                        "-circuitId": "shanghai",
                                        "url": "http://en.wikipedia.org/wiki/Shanghai_International_Circuit",
                                        "CircuitName": "Shanghai International Circuit",
                                        "Location": {
                                          "lat": "31.3389",
                                          "long": "121.22",
                                          "Locality": "Shanghai",
                                          "Country": "China"
                                        }
                                      },
                                      "Date": "2017-04-09",
                                      "Time": "06:00:00Z"
                                    },
                                    {
                                      "season": "2017",
                                      "round": "3",
                                      "url": "https://en.wikipedia.org/wiki/2017_Bahrain_Grand_Prix",
                                      "RaceName": "Bahrain Grand Prix",
                                      "Circuit": {
                                        "-circuitId": "bahrain",
                                        "url": "http://en.wikipedia.org/wiki/Bahrain_International_Circuit",
                                        "CircuitName": "Bahrain International Circuit",
                                        "Location": {
                                          "lat": "26.0325",
                                          "long": "50.5106",
                                          "Locality": "Sakhir",
                                          "Country": "Bahrain"
                                        }
                                      },
                                      "Date": "2017-04-16",
                                      "Time": "15:00:00Z"
                                    },
                                    {
                                      "season": "2017",
                                      "round": "4",
                                      "url": "https://en.wikipedia.org/wiki/2017_Russian_Grand_Prix",
                                      "RaceName": "Russian Grand Prix",
                                      "Circuit": {
                                        "-circuitId": "sochi",
                                        "url": "http://en.wikipedia.org/wiki/Sochi_Autodrom",
                                        "CircuitName": "Sochi Autodrom",
                                        "Location": {
                                          "lat": "43.4057",
                                          "long": "39.9578",
                                          "Locality": "Sochi",
                                          "Country": "Russia"
                                        }
                                      },
                                      "Date": "2017-04-30",
                                      "Time": "12:00:00Z"
                                    },
                                    {
                                      "season": "2017",
                                      "round": "5",
                                      "url": "https://en.wikipedia.org/wiki/2017_Spanish_Grand_Prix",
                                      "RaceName": "Spanish Grand Prix",
                                      "Circuit": {
                                        "-circuitId": "catalunya",
                                        "url": "http://en.wikipedia.org/wiki/Circuit_de_Barcelona-Catalunya",
                                        "CircuitName": "Circuit de Barcelona-Catalunya",
                                        "Location": {
                                          "lat": "41.57",
                                          "long": "2.26111",
                                          "Locality": "Montmeló",
                                          "Country": "Spain"
                                        }
                                      },
                                      "Date": "2017-05-14",
                                      "Time": "12:00:00Z"
                                    },
                                    {
                                      "season": "2017",
                                      "round": "6",
                                      "url": "https://en.wikipedia.org/wiki/2017_Monaco_Grand_Prix",
                                      "RaceName": "Monaco Grand Prix",
                                      "Circuit": {
                                        "-circuitId": "monaco",
                                        "url": "http://en.wikipedia.org/wiki/Circuit_de_Monaco",
                                        "CircuitName": "Circuit de Monaco",
                                        "Location": {
                                          "lat": "43.7347",
                                          "long": "7.42056",
                                          "Locality": "Monte-Carlo",
                                          "Country": "Monaco"
                                        }
                                      },
                                      "Date": "2017-05-28",
                                      "Time": "12:00:00Z"
                                    },
                                    {
                                      "season": "2017",
                                      "round": "7",
                                      "url": "https://en.wikipedia.org/wiki/2017_Canadian_Grand_Prix",
                                      "RaceName": "Canadian Grand Prix",
                                      "Circuit": {
                                        "-circuitId": "villeneuve",
                                        "url": "http://en.wikipedia.org/wiki/Circuit_Gilles_Villeneuve",
                                        "CircuitName": "Circuit Gilles Villeneuve",
                                        "Location": {
                                          "lat": "45.5",
                                          "long": "-73.5228",
                                          "Locality": "Montreal",
                                          "Country": "Canada"
                                        }
                                      },
                                      "Date": "2017-06-11",
                                      "Time": "18:00:00Z"
                                    },
                                    {
                                      "season": "2017",
                                      "round": "8",
                                      "url": "https://en.wikipedia.org/wiki/2017_Azerbaijan_Grand_Prix",
                                      "RaceName": "Azerbaijan Grand Prix",
                                      "Circuit": {
                                        "-circuitId": "BAK",
                                        "url": "http://en.wikipedia.org/wiki/Baku_City_Circuit",
                                        "CircuitName": "Baku City Circuit",
                                        "Location": {
                                          "lat": "40.3725",
                                          "long": "49.8533",
                                          "Locality": "Baku",
                                          "Country": "Azerbaijan"
                                        }
                                      },
                                      "Date": "2017-06-25",
                                      "Time": "13:00:00Z"
                                    },
                                    {
                                      "season": "2017",
                                      "round": "9",
                                      "url": "https://en.wikipedia.org/wiki/2017_Austrian_Grand_Prix",
                                      "RaceName": "Austrian Grand Prix",
                                      "Circuit": {
                                        "-circuitId": "red_bull_ring",
                                        "url": "http://en.wikipedia.org/wiki/Red_Bull_Ring",
                                        "CircuitName": "Red Bull Ring",
                                        "Location": {
                                          "lat": "47.2197",
                                          "long": "14.7647",
                                          "Locality": "Spielburg",
                                          "Country": "Austria"
                                        }
                                      },
                                      "Date": "2017-07-09",
                                      "Time": "12:00:00Z"
                                    },
                                    {
                                      "season": "2017",
                                      "round": "10",
                                      "url": "https://en.wikipedia.org/wiki/2017_British_Grand_Prix",
                                      "RaceName": "British Grand Prix",
                                      "Circuit": {
                                        "-circuitId": "silverstone",
                                        "url": "http://en.wikipedia.org/wiki/Silverstone_Circuit",
                                        "CircuitName": "Silverstone Circuit",
                                        "Location": {
                                          "lat": "52.0786",
                                          "long": "-1.01694",
                                          "Locality": "Silverstone",
                                          "Country": "UK"
                                        }
                                      },
                                      "Date": "2017-07-16",
                                      "Time": "12:00:00Z"
                                    },
                                    {
                                      "season": "2017",
                                      "round": "11",
                                      "url": "https://en.wikipedia.org/wiki/2017_Hungarian_Grand_Prix",
                                      "RaceName": "Hungarian Grand Prix",
                                      "Circuit": {
                                        "-circuitId": "hungaroring",
                                        "url": "http://en.wikipedia.org/wiki/Hungaroring",
                                        "CircuitName": "Hungaroring",
                                        "Location": {
                                          "lat": "47.5789",
                                          "long": "19.2486",
                                          "Locality": "Budapest",
                                          "Country": "Hungary"
                                        }
                                      },
                                      "Date": "2017-07-30",
                                      "Time": "12:00:00Z"
                                    },
                                    {
                                      "season": "2017",
                                      "round": "12",
                                      "url": "https://en.wikipedia.org/wiki/2017_Belgian_Grand_Prix",
                                      "RaceName": "Belgian Grand Prix",
                                      "Circuit": {
                                        "-circuitId": "spa",
                                        "url": "http://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps",
                                        "CircuitName": "Circuit de Spa-Francorchamps",
                                        "Location": {
                                          "lat": "50.4372",
                                          "long": "5.97139",
                                          "Locality": "Spa",
                                          "Country": "Belgium"
                                        }
                                      },
                                      "Date": "2017-08-27",
                                      "Time": "12:00:00Z"
                                    },
                                    {
                                      "season": "2017",
                                      "round": "13",
                                      "url": "https://en.wikipedia.org/wiki/2017_Italian_Grand_Prix",
                                      "RaceName": "Italian Grand Prix",
                                      "Circuit": {
                                        "-circuitId": "monza",
                                        "url": "http://en.wikipedia.org/wiki/Autodromo_Nazionale_Monza",
                                        "CircuitName": "Autodromo Nazionale di Monza",
                                        "Location": {
                                          "lat": "45.6156",
                                          "long": "9.28111",
                                          "Locality": "Monza",
                                          "Country": "Italy"
                                        }
                                      },
                                      "Date": "2017-09-03",
                                      "Time": "12:00:00Z"
                                    },
                                    {
                                      "season": "2017",
                                      "round": "14",
                                      "url": "https://en.wikipedia.org/wiki/2017_Singapore_Grand_Prix",
                                      "RaceName": "Singapore Grand Prix",
                                      "Circuit": {
                                        "-circuitId": "marina_bay",
                                        "url": "http://en.wikipedia.org/wiki/Marina_Bay_Street_Circuit",
                                        "CircuitName": "Marina Bay Street Circuit",
                                        "Location": {
                                          "lat": "1.2914",
                                          "long": "103.864",
                                          "Locality": "Marina Bay",
                                          "Country": "Singapore"
                                        }
                                      },
                                      "Date": "2017-09-17",
                                      "Time": "12:00:00Z"
                                    },
                                    {
                                      "season": "2017",
                                      "round": "15",
                                      "url": "https://en.wikipedia.org/wiki/2017_Malaysian_Grand_Prix",
                                      "RaceName": "Malaysian Grand Prix",
                                      "Circuit": {
                                        "-circuitId": "sepang",
                                        "url": "http://en.wikipedia.org/wiki/Sepang_International_Circuit",
                                        "CircuitName": "Sepang International Circuit",
                                        "Location": {
                                          "lat": "2.76083",
                                          "long": "101.738",
                                          "Locality": "Kuala Lumpur",
                                          "Country": "Malaysia"
                                        }
                                      },
                                      "Date": "2017-10-01",
                                      "Time": "07:00:00Z"
                                    },
                                    {
                                      "season": "2017",
                                      "round": "16",
                                      "url": "https://en.wikipedia.org/wiki/2017_Japanese_Grand_Prix",
                                      "RaceName": "Japanese Grand Prix",
                                      "Circuit": {
                                        "-circuitId": "suzuka",
                                        "url": "http://en.wikipedia.org/wiki/Suzuka_Circuit",
                                        "CircuitName": "Suzuka Circuit",
                                        "Location": {
                                          "lat": "34.8431",
                                          "long": "136.541",
                                          "Locality": "Suzuka",
                                          "Country": "Japan"
                                        }
                                      },
                                      "Date": "2017-10-08",
                                      "Time": "05:00:00Z"
                                    },
                                    {
                                      "season": "2017",
                                      "round": "17",
                                      "url": "https://en.wikipedia.org/wiki/2017_United_States_Grand_Prix",
                                      "RaceName": "United States Grand Prix",
                                      "Circuit": {
                                        "-circuitId": "americas",
                                        "url": "http://en.wikipedia.org/wiki/Circuit_of_the_Americas",
                                        "CircuitName": "Circuit of the Americas",
                                        "Location": {
                                          "lat": "30.1328",
                                          "long": "-97.6411",
                                          "Locality": "Austin",
                                          "Country": "USA"
                                        }
                                      },
                                      "Date": "2017-10-22",
                                      "Time": "19:00:00Z"
                                    },
                                    {
                                      "season": "2017",
                                      "round": "18",
                                      "url": "https://en.wikipedia.org/wiki/2017_Mexican_Grand_Prix",
                                      "RaceName": "Mexican Grand Prix",
                                      "Circuit": {
                                        "-circuitId": "rodriguez",
                                        "url": "http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Hermanos_Rodr%C3%ADguez",
                                        "CircuitName": "Autódromo Hermanos Rodríguez",
                                        "Location": {
                                          "lat": "19.4042",
                                          "long": "-99.0907",
                                          "Locality": "Mexico City",
                                          "Country": "Mexico"
                                        }
                                      },
                                      "Date": "2017-10-29",
                                      "Time": "19:00:00Z"
                                    },
                                    {
                                      "season": "2017",
                                      "round": "19",
                                      "url": "https://en.wikipedia.org/wiki/2017_Brazilian_Grand_Prix",
                                      "RaceName": "Brazilian Grand Prix",
                                      "Circuit": {
                                        "-circuitId": "interlagos",
                                        "url": "http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace",
                                        "CircuitName": "Autódromo José Carlos Pace",
                                        "Location": {
                                          "lat": "-23.7036",
                                          "long": "-46.6997",
                                          "Locality": "São Paulo",
                                          "Country": "Brazil"
                                        }
                                      },
                                      "Date": "2017-11-12",
                                      "Time": "16:00:00Z"
                                    },
                                    {
                                      "season": "2017",
                                      "round": "20",
                                      "url": "https://en.wikipedia.org/wiki/2017_Abu_Dhabi_Grand_Prix",
                                      "RaceName": "Abu Dhabi Grand Prix",
                                      "Circuit": {
                                        "-circuitId": "yas_marina",
                                        "url": "http://en.wikipedia.org/wiki/Yas_Marina_Circuit",
                                        "CircuitName": "Yas Marina Circuit",
                                        "Location": {
                                          "lat": "24.4672",
                                          "long": "54.6031",
                                          "Locality": "Abu Dhabi",
                                          "Country": "UAE"
                                        }
                                      },
                                      "Date": "2017-11-26",
                                      "Time": "17:00:00Z"
                                    }
                                ]
        })
  }

  render() {
    return (
      <div>
        <h1>Race {this.state.dataRace[0].season}</h1>
        <tableRace dataRace={this.state.dataRace}></tableRace>
      </div>
    )
  }
}
