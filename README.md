# clean-query-params

I often find myself needing to send URL's based on some kinds of an
API call.  If you are generating the URL through some kinds of API
generator, you will most likely get a bunch of query parameters that
you are not using.  This is a common occurence when generating URL's for
queries to ArcGIS Server.

You can see a very long example below, where only a few of the query paramters are
actually being used.

`http://navigator.state.or.us/arcgis/rest/services/Locators/gc_Composite/GeocodeServer/findAddressCandidates?Address=635+Capitol+St+NE&City=Salem&Zip=97301&State=OR&SingleLine=&category=&outFields=*&maxLocations=&outSR=4326&searchExtent=&location=&distance=&magicKey=&f=pjson`

To clean this up, I usually manually delete the query parameters that have empty
values.  `clean-query-params` is a small command line utility written in Node.js to take a
URL with unused query parameters, remove them, and stream the output to `stdout`.

## Setup

`npm install -g clean-query-params`

## Execution

`clean-query-params "http://navigator.state.or.us/arcgis/rest/services/Locators/gc_Composite/GeocodeServer/findAddressCandidates?Address=635+Capitol+St+NE&City=Salem&Zip=97301&State=OR&SingleLine=&category=&outFields=*&maxLocations=&outSR=4326&searchExtent=&location=&distance=&magicKey=&f=pjson" > cleanurl.txt`

Notice how I am writing the result to a file using `> cleanurl.txt`

## Result

After running the script, you will see your slimmed down URL:


`http://navigator.state.or.us/arcgis/rest/services/Locators/gc_Composite/GeocodeServer/findAddressCandidates?Address=2266%20Crestview%20Dr&City=Salem&Zip=97301&State=OR&outFields=*&outSR=4326&f=pjson
`
