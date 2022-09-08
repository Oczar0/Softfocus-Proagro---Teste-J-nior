-- Table: public.comunicacao_perda

-- DROP TABLE IF EXISTS public.comunicacao_perda;

CREATE TABLE IF NOT EXISTS public.comunicacao_perda
(
	id SERIAL,
    nome text COLLATE pg_catalog."default" NOT NULL,
    email text COLLATE pg_catalog."default" NOT NULL,
    cpf character varying(14) COLLATE pg_catalog."default" NOT NULL,
    latitude double precision NOT NULL,
    longitude double precision NOT NULL,
    tipo_lavoura text COLLATE pg_catalog."default" NOT NULL,
    data_colheita text COLLATE pg_catalog."default" NOT NULL,
    evento_ocorrido text COLLATE pg_catalog."default" NOT NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.comunicacao_perda
    OWNER to postgres;