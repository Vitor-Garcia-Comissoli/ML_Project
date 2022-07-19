import seaborn as sns
import matplotlib.pyplot as plt

plt.style.use('dark_background')
plt.rcParams.update({'figure.facecolor':"None",
  "savefig.facecolor":"None",
  'grid.color':"None",
  "axes.facecolor": "None",
  "grid.alpha":0,
  "legend.framealpha":0
})
sns.set_palette(sns.color_palette("bright"))
