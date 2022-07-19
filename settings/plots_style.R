par(bg="#14141400",
    fg="white",
    col="white",
    col.axis="white",
    col.lab="white",
    col.main="white",
    col.sub="white"
)

library(ggplot2)
custom_theme <- theme(
  panel.border = element_blank(),
  panel.grid.major = element_blank(), 
  panel.grid.minor = element_blank(),
  plot.background = element_rect(fill="transparent", color=NA_character_),
  legend.box.background = element_rect(fill="transparent", color=NA_character_),
  legend.key = element_rect(fill="transparent", color=NA_character_),
  legend.background = element_rect(fill="transparent", color=NA_character_),
  legend.text = element_text(color="white"),
  legend.title= element_text(color="white"),
  axis.line = element_line(color="white"),
  axis.ticks = element_line(color="white"),
  axis.text = element_text(color="white"),
  axis.title = element_text(color="white"),
  panel.background = element_rect(fill="transparent", color=NA_character_),
  rect = element_rect(fill="transparent", color=NA_character_),
  line = element_line(color="white"),
  text = element_text(color="white"),
  title= element_text(color="white")
)
theme_set(custom_theme)

params <- ls(pattern = '^geom_', env = as.environment('package:ggplot2'))
geoms <- gsub("geom_", "", params)

SetGeomFunction <- function (geom_type) {
  return(tryCatch(update_geom_defaults(geom_type, list(colour = "white", fill="white")), error=function(e) NULL))
}

lapply(geoms, SetGeomFunction)
