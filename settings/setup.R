<<<<<<< HEAD
#===============================================================================
# General configurations for each chunk
knitr::opts_chunk$set(
  fig.align = "center",
  fig.ext='svg',
  dev='svg',
  comment =NA,
  fig.dim=c(8,6),
  fig.width = 8,
  fig.height = 6,
  warning=F
)

#===============================================================================
# Creating a function to remove prefix of a R output  
# A Prefix nulling hook.

# Make sure to keep the default for normal processing.
default_output_hook <- knitr::knit_hooks$get("output")

# Output hooks handle normal R console output.
knitr::knit_hooks$set( output = function(x, options) {
  
  comment <- knitr::opts_current$get("comment")
  if( is.na(comment) ) comment <- ""
  can_null <- grepl( paste0( comment, "\\s*\\[\\d?\\]" ),
                     x, perl = TRUE)
  do_null <- isTRUE( knitr::opts_current$get("null_prefix") )
  if( can_null && do_null ) {
    # By default R print output aligns at the right brace.
    align_index <- regexpr( "\\]", x )[1] - 1
    # Two cases: start or newline
    re <- paste0( "^.{", align_index, "}\\]")
    rep <- comment
    x <- gsub( re, rep,  x )
    re <- paste0( "\\\n.{", align_index, "}\\]")
    rep <- paste0( "\n", comment )
    x <- gsub( re, rep,  x )
  }
  
  default_output_hook( x, options )
  
})

knitr::opts_template$set("kill_prefix"=list(comment=NA, null_prefix=TRUE))

knitr::opts_chunk$set(opts.label="kill_prefix")

knitr::opts_knit$set(global.par = TRUE)

=======
#===============================================================================
# General configurations for each chunk
knitr::opts_chunk$set(
  fig.align = "center",
  fig.ext='svg',
  dev='svg',
  comment =NA,
  fig.dim=c(8,6),
  fig.width = 8,
  fig.height = 6,
  warning=F
)

#===============================================================================
# Creating a function to remove prefix of a R output  
# A Prefix nulling hook.

# Make sure to keep the default for normal processing.
default_output_hook <- knitr::knit_hooks$get("output")

# Output hooks handle normal R console output.
knitr::knit_hooks$set( output = function(x, options) {
  
  comment <- knitr::opts_current$get("comment")
  if( is.na(comment) ) comment <- ""
  can_null <- grepl( paste0( comment, "\\s*\\[\\d?\\]" ),
                     x, perl = TRUE)
  do_null <- isTRUE( knitr::opts_current$get("null_prefix") )
  if( can_null && do_null ) {
    # By default R print output aligns at the right brace.
    align_index <- regexpr( "\\]", x )[1] - 1
    # Two cases: start or newline
    re <- paste0( "^.{", align_index, "}\\]")
    rep <- comment
    x <- gsub( re, rep,  x )
    re <- paste0( "\\\n.{", align_index, "}\\]")
    rep <- paste0( "\n", comment )
    x <- gsub( re, rep,  x )
  }
  
  default_output_hook( x, options )
  
})

knitr::opts_template$set("kill_prefix"=list(comment=NA, null_prefix=TRUE))

knitr::opts_chunk$set(opts.label="kill_prefix")

knitr::opts_knit$set(global.par = TRUE)

>>>>>>> 3ccef94d7154cd69cd0fd4fc6048801a19467be8
