// Mise à jour du fichier locales/fr/common.json
// Section Contact — ajouter le 2e numéro de téléphone

// Changer :
// "phoneValue": "079 965 03 54",

// Par :
// "phone1Value": "079 965 03 54",
// "phone2Value": "079 617 53 87",

// Et dans le Footer, ajouter les 2 numéros :
// Tel: 079 965 03 54 · 079 617 53 87

// ─── Mise à jour du composant Footer.tsx ──────────────────────────
// Remplacer la ligne téléphone par :
/*
<li className="flex items-center gap-3 text-sm text-white/75 font-body">
  <Phone size={16} className="text-accent flex-shrink-0" />
  <div>
    <a href="tel:+41799650354" className="hover:text-accent transition-colors block">
      079 965 03 54
    </a>
    <a href="tel:+41796175387" className="hover:text-accent transition-colors block">
      079 617 53 87
    </a>
  </div>
</li>
*/

// ─── Mise à jour du composant Contact page.tsx ────────────────────
// Remplacer la card téléphone par :
/*
{
  icon: <Phone size={24} className="text-nature" />,
  label: t('phoneLabel'),
  value: '079 965 03 54\n079 617 53 87',
  href: 'tel:+41799650354',
},
*/
export {}
