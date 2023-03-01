var map = AmCharts.makeChart("mapdiv",{
type: "map",
theme: "dark",
projection: "mercator",
panEventsEnabled : true,
backgroundColor : "#535364",
backgroundAlpha : 1,
zoomControl: {
zoomControlEnabled : true
},
dataProvider : {
map : "worldHigh",
getAreasFromMap : true,
areas :
[
	{
		"id": "AT",
		"showAsSelected": true
	},
	{
		"id": "BE",
		"showAsSelected": true
	},
	{
		"id": "HR",
		"showAsSelected": true
	},
	{
		"id": "CZ",
		"showAsSelected": true
	},
	{
		"id": "DK",
		"showAsSelected": true
	},
	{
		"id": "DE",
		"showAsSelected": true
	},
	{
		"id": "GR",
		"showAsSelected": true
	},
	{
		"id": "HU",
		"showAsSelected": true
	},
	{
		"id": "IS",
		"showAsSelected": true
	},
	{
		"id": "IE",
		"showAsSelected": true
	},
	{
		"id": "IT",
		"showAsSelected": true
	},
	{
		"id": "NL",
		"showAsSelected": true
	},
	{
		"id": "PL",
		"showAsSelected": true
	},
	{
		"id": "PT",
		"showAsSelected": true
	},
	{
		"id": "ES",
		"showAsSelected": true
	},
	{
		"id": "SE",
		"showAsSelected": true
	},
	{
		"id": "CH",
		"showAsSelected": true
	},
	{
		"id": "GB",
		"showAsSelected": true
	},
	{
		"id": "VA",
		"showAsSelected": true
	},
	{
		"id": "CA",
		"showAsSelected": true
	},
	{
		"id": "MX",
		"showAsSelected": true
	},
	{
		"id": "US",
		"showAsSelected": true
	},
	{
		"id": "EC",
		"showAsSelected": true
	},
	{
		"id": "MA",
		"showAsSelected": true
	}
]
},
areasSettings : {
autoZoom : true,
color : "#B4B4B7",
colorSolid : "#28023D",
selectedColor : "#28023D",
outlineColor : "#666666",
rollOverColor : "#FFA600",
rollOverOutlineColor : "#000000"
}
});
