<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <html>
      <body>
        <h1>Nombre de las Asignaturas</h1>
        <xsl:for-each select="universidad/asignaturas/asignatura">
          <p>
            <xsl:value-of select="nombre"/> - Créditos Teóricos: <xsl:value-of select="creditos_teoricos"/>
          </p>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
