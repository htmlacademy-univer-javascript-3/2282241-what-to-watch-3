import ButtonFilmCard from '../components/button-film-card';

function PlayerPage() {
  return (
    <div className="player">
      <video src="#" className="player__video" poster="img/player-poster.jpg"></video>

      <button type="button" className="player__exit">Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <ButtonFilmCard height={'19'} width={'19'} xlinkHref={'#play-s'} nameButton={'Play'} className={'player__play'}/>
          <div className="player__name">Transpotting</div>
          <ButtonFilmCard height={'27'} width={'27'} xlinkHref={'#full-screen'} nameButton={'Full screen'} className={'player__full-screen'}/>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
