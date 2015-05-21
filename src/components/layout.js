import React from 'react'

var data = [
  {title: "Summer", milestones: [
    {code: "SI", start_week: 5, end_week: 10},
    {code: "MI", start_week: 15, end_week: 25},
    {code: "BD", start_week: 26, end_week: 31},
    {code: "MO", start_week: 32, end_week: 38},
    {code: "DC", start_week: 45, end_week: 48},
    {code: "IS", start_week: 50, end_week: 52}
  ]},
  {title: "Fall", milestones: [
    {code: "SI", start_week: 10, end_week: 14},
    {code: "MI", start_week: 15, end_week: 30},
    {code: "BD", start_week: 33, end_week: 40},
    {code: "MO", start_week: 42, end_week: 43},
    {code: "DC", start_week: 45, end_week: 48},
    {code: "IS", start_week: 50, end_week: 52}
  ]}
]

var Period = React.createClass({
  bgColor: function(code){
    return {
      "blank": "#fff",
      "SI": "#ffeeee",
      "MI": "#ffffee",
      "BD": "#eeffee",
      "MO": "#eeffff",
      "DC": "#eeeeff",
      "IS": "#ffeeff"
    }[code];
  },

  render: function(){
    var length = this.props.period.end_week - this.props.period.start_week;
    var style={display: "inline-block", 
      float: "left",
      width: 20*length, 
      textAlign: "center",
      height: 20, backgroundColor: this.bgColor(this.props.period.code) };
    return (<div style={style}>{this.props.period.code=="blank" ? "" : this.props.period.code}</div>);
  }
});

var Season = React.createClass({
  segments: function(milestones){
    var totalRange = 52;
    var periods = [];
    if(milestones[0].start_week > 1) {
      periods.push({ id: 1,
                     code: "blank",
                     start_week: 1,
                     end_week: milestones[0].start_week-1});
    }
    for(var i=0;i < milestones.length; i++){
      milestones[i].id =periods.length +1
      periods.push(milestones[i]);
      var nextPeriod = milestones[i+i];
      if(nextPeriod && (nextPeriod.start_week-milestones[i].end_week)>1) {
        periods.push({id: periods.length+1,
                      code:"blank",
                      start_week: milestones[i].end_week,
                      end_week: nextPeriod.start_week - 1});
      }
    }
    return periods;
  },
  drawPeriods: function(){
    var periods = this.segments(this.props.season.milestones);
    return periods.map((p) => <Period period={p}/>);
  },

  render: function(){
    var rowStyle = {border: "1px solid #ccc"};
    return <div className="periods">{this.drawPeriods()}</div>
  }
})

var Layout = React.createClass({
  getInitialState: function(){
    return {data: data};
  },
  render: function(){
    var periodsStyle = {overflowX: "scroll"};
    var periodsContainer= {minWidth: 1040};
    return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          Seasons
        </div>
        <div className="col-md-9">
          Milestones
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-3">
          {this.state.data.map((s) => <div className="season-name">{s.title}</div>)}
        </div>
        <div className="col-md-9" style={periodsStyle}>
          <div style={periodsContainer}>
            {this.state.data.map((s) => <Season season={s}/>)}
          </div>
        </div>
      </div>

    </div>
    );
  }
});
module.exports = Layout;
