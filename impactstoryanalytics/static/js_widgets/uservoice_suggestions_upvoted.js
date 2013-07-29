var Uservoice_suggestions_upvoted = function() {
}

Uservoice_suggestions_upvoted.prototype = {
    create:function(data){
        var baseOptions = {
            iaLabelWidth: 2,
            iaShowSparkline: false
        }

        var ss = new SparklineSet(data, baseOptions)
        _.each(data.slice(0,5), function(suggestion){

            var options = {
                    iaDisplayName: suggestion["title"],
                    iaHref: suggestion["url"],
                    iaYvalues: [suggestion["vote_count"]]               
                }
            var sparkline = new Sparkline(options)
            ss.addSparkline(sparkline)
        })
        ss.render($(".widget-uservoice_suggestions_upvoted"))
    }
}

