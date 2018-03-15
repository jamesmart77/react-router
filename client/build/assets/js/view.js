// expand all collapsible items
function expandAll() {
    $(".collapsible-header").addClass("active");
    $(".collapsible").collapsible({accordion: false});
}


// collapse all collapsible items
function collapseAll() {
    $(".collapsible-header").removeClass(function() {
        return "active";
    });
    $(".collapsible").collapsible({accordion: true});
    $(".collapsible").collapsible({accordion: false});
}

// document load
$(document).ready(function() {
    // setTimeout(expandAll, 200)
});
