function crearLista(limite, presentador) {
  let personasConfirmadas = 0
  return {
    obtenerPlazasDisponibles() {
      return limite - personasConfirmadas
    },
    inscribirPersona(persona) {
      presentador.inscripcionConfirmada(persona)
      personasConfirmadas = personasConfirmadas + 1
    }
  }
}

module.exports = crearLista