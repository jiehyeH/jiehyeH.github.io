---
layout: page
title: Nearby Galaxies
description: dwarf galaxies around us and the Andromeda Galaxy
img: assets/img/Local_Group_and_nearest_galaxies.jpg
importance: 2
category: work
giscus_comments: true
---

<strong>Dwarf galaxies</strong>

The satellite dwarf galaxies orbiting the Milky Way are nearly as old as the Universe itself. They’re small and faint, but packed with clues about how stellar systems and their chemical elements formed in the early cosmos. Because of their distance, it’s hard to get spectra for all their stars. That’s why the Subaru Prime Focus Spectrograph, now collecting thousands of spectra at once, is such a big step forward. Still, most of what we have to work with right now is photometry. In a recent study, <a href="https://iopscience.iop.org/article/10.3847/1538-4357/ade679" target="_blank">Hong et al. (2025),</a> used well-calibrated imaging from Subaru’s Hyper Suprime-Cam to estimate the iron and magnesium content of stars in four dwarf galaxies: Fornax, Sculptor, Ursa Minor, and Draco. Iron was inferred from broad g and i bands, and magnesium from a narrow-band filter called NB515. It’s a clever way to pull out chemical information from imaging data alone.

Early in these galaxies’ lives, massive stars exploded as core-collapse supernovae (CCSNe), enriching their surroundings with magnesium and a bit of iron. As that process continued, magnesium built up. Later on, intermediate-mass stars began producing a lot more iron via SN Ia. By looking at the balance between magnesium and iron, we get a rough timeline of how star formation unfolded. To estimate abundances from photometry, we used medium-resolution spectra from Keck’s DEIMOS instrument to train a machine learning model — specifically, a random forest — which could then be applied to the photometric data. The results not only agree with previous spectroscopic studies in the centers of these galaxies, but also reveal chemical trends across more extended regions. It shows that, when trained carefully, photometric models can do a lot more than we used to think. Of course, fully mapping star formation history will require more detailed chemical evolution modeling. But this is a promising foundation.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dw1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dw2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/dw3.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    <strong>Left</strong> Distributions of [Fe/H], [Mg/H], and [Mg/Fe] in the spectroscopic training sample. The middle and bottom panels show the abundance estimates for the photometric sample. The middle panels include only those with available spectroscopic observations. <br>
    <strong>Middle</strong> Spatial distributions of estimated [Fe/H] vs. [Mg/Fe] across different radial regions in the four galaxies. <br>
    <strong>Right</strong> Estimated gradients of [Fe/H] and [Mg/H] as a function of distance from the galaxy center, beyond the half-light radius.
</div>

<strong>Andromeda galaxy (M31)</strong>

The same approach is now being extended to Andromeda — our giant neighbor, about 765 kiloparsecs away. (That’s roughly 2.5 million light-years, if you’re counting.) Using HSC photometry, we are again estimating iron and magnesium abundances. But there’s a twist. At that distance, we don’t have enough spectroscopic training data — the kind that tells the model what’s “true.” To get around that, Hong et al. (2026, in prep) are generating synthetic Andromeda-like data using stellar isochrones and Chemfit — a tool developed by Gerasimov to extract stellar parameters from spectra. That synthetic data is then used to train a neural network to estimate abundances directly from photometry. The work is still ongoing, and we're aiming to publish the results early next year — something to look forward to!

{% comment %}

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

{% endcomment %}
