'use strict';

module.exports = {
  async up(queryInterface) {
    const now = new Date();
    await queryInterface.bulkInsert('projects', [
      {
        title:        'Sistema de gestión ISO',
        description:  'Backend para gestión de cotizaciones y flujos administrativos con integración de formularios externos y automatizaciones via API.',
        icon:         '⚙️',
        github_url:   null,
        demo_url:     null,
        technologies: JSON.stringify(['Laravel', 'MySQL', 'Power BI', 'REST API']),
        featured:     true,
        order_index:  1,
        created_at:   now,
        updated_at:   now,
      },
      {
        title:        'App Pets — Backend',
        description:  'Sistema backend para gestión de vendedores, proveedores y ventas en aplicación móvil disponible en iOS y Android.',
        icon:         '🐾',
        github_url:   null,
        demo_url:     null,
        technologies: JSON.stringify(['Node.js', 'MongoDB', 'NestJS']),
        featured:     true,
        order_index:  2,
        created_at:   now,
        updated_at:   now,
      },
      {
        title:        'Sistema de cobranzas',
        description:  'Web completa para control de cobranzas de socios y accionistas, integrado con Saint Enterprise. Incluye módulo de reservas y POS.',
        icon:         '💳',
        github_url:   null,
        demo_url:     null,
        technologies: JSON.stringify(['PHP', 'MySQL', 'Saint Enterprise']),
        featured:     false,
        order_index:  3,
        created_at:   now,
        updated_at:   now,
      },
      {
        title:        'Apps Android — Almacén',
        description:  'Tres aplicaciones móviles Android para gestión de almacén, ventas y catálogos de repuestos. Arquitectura MVVM con Kotlin.',
        icon:         '📱',
        github_url:   null,
        demo_url:     null,
        technologies: JSON.stringify(['Android', 'Kotlin', 'MVVM']),
        featured:     false,
        order_index:  4,
        created_at:   now,
        updated_at:   now,
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('projects', null, {});
  },
};
