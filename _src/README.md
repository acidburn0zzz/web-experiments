## Mockup source files

The HTML source files for all the mockups sorted into folders by application usually. 

### Frontmatter

Frontmatter is crucial for every mockup, here's an example from the Initial Setup concept:

```
---
layout: mockup
title: "Initial Setup Welcome Page"
permalink: initial-setup-start
theme: Adwaita/Adwaita.css
wallpaper: adwaita
published: true
issue: https://gitlab.gnome.org/GNOME/gnome-initial-setup/issues/7
---
```

 * `layout: mockup` is consistent for all mockups and needn't be changed
 * `title:` the title of the mockup though it generally follows a convention of `Application - View` or `Application - View - Subview`, e.g. "Settings - Devices - Display"
 * `permalink:` what will be the url for the mockup, avoid using trailing or preceding `/`, can be a subfolder (useful for mockups with subviews)
 * `theme:` the corresponding CSS theme the mockup uses, more often than not it will be either `Adwaita/Adwaita.css` or `Adwaita/Adwaita-Dark.css` for the dark variant
 * `wallpaper:` the background of the mockup, this is optional but there's a [series of classes](https://gitlab.gnome.org/Teams/Design/web-experiments/blob/master/css/Adwaita/_wallpapers.scss) for the HTML `body` that will display one of a series of wallpapers.
 * `published:` only include this line if the mockup is to show up in the list on the home page
 * `issue:` a full link to an issue that is related to this mockup that will sho up in the list on the home page

There are some other complicated cases that can be found in some of the mockups but generally the above is the common case.